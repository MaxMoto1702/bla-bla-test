package maxmoto1702.weather.init;

import org.springframework.core.annotation.Order;
import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

/**
 * No customizations of {@link AbstractSecurityWebApplicationInitializer} are necessary.
 *
 * @author Rob Winch
 */
@Order(2)
public class SecurityWebApplicationInitializer extends
        AbstractSecurityWebApplicationInitializer {
}
