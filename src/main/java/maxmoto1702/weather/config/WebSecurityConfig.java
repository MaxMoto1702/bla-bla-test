package maxmoto1702.weather.config;

import maxmoto1702.weather.security.SavedRequestAwareAuthenticationSuccessHandler;
import maxmoto1702.weather.security.RestAuthenticationEntryPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

@EnableWebSecurity
@ComponentScan("maxmoto1702.weather.security")
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final RestAuthenticationEntryPoint restAuthenticationEntryPoint;
    private final SavedRequestAwareAuthenticationSuccessHandler authenticationSuccessHandler;

    @Autowired
    public WebSecurityConfig(SavedRequestAwareAuthenticationSuccessHandler authenticationSuccessHandler, RestAuthenticationEntryPoint restAuthenticationEntryPoint) {
        this.authenticationSuccessHandler = authenticationSuccessHandler;
        this.restAuthenticationEntryPoint = restAuthenticationEntryPoint;
    }

    @Bean
    public UserDetailsService userDetailsService() {
        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
        manager.createUser(User
                .withUsername("user")
                .password("password")
                .roles("USER")
                .build());
        return manager;
    }

    @Bean
    public SimpleUrlAuthenticationFailureHandler authenticationFailureHandler() {
        return new SimpleUrlAuthenticationFailureHandler();
    }

    @Bean
    public LogoutSuccessHandler logoutSuccessHandler() {
        return new HttpStatusReturningLogoutSuccessHandler();
    }

    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests().antMatchers("/assets/*").permitAll().antMatchers("/backend/*").authenticated()
                .and().formLogin().successHandler(authenticationSuccessHandler).failureHandler(authenticationFailureHandler()).loginProcessingUrl("/auth/login")
                .and().logout().logoutSuccessHandler(logoutSuccessHandler()).logoutUrl("/auth/logout")
                .and().httpBasic()
                .and().csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint(restAuthenticationEntryPoint)
        ;
    }
}
