package maxmoto1702.weather.controller;

import maxmoto1702.weather.domain.WeatherInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("weather")
public class WeatherController {

    @RequestMapping("byCityName/{cityName}")
    public ResponseEntity<WeatherInfo> queryByCityName(@PathVariable String cityName) {
        WeatherInfo body = new WeatherInfo();
        body.setCityName(cityName);
        body.setTemperature(30);
        body.setLat(10.000);
        body.setLon(10.000);
        return ok(body);
    }

    @RequestMapping("byCoord/{lat},{lon}")
    public ResponseEntity<WeatherInfo> queryByCoordinates(@PathVariable Double lat, @PathVariable Double lon) {
        WeatherInfo body = new WeatherInfo();
        body.setCityName("Odessa 2");
        body.setTemperature(35);
        body.setLat(lat);
        body.setLon(lon);
        return ok(body);
    }
}
