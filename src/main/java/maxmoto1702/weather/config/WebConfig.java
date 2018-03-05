package maxmoto1702.weather.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@ComponentScan("maxmoto1702.weather.controller")
@EnableWebMvc
public class WebConfig {
}
