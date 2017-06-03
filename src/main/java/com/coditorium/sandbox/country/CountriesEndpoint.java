package com.coditorium.sandbox.country;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/countries")
class CountriesEndpoint {
  private final Logger logger = LoggerFactory.getLogger(this.getClass());
  private final CountriesResponse countriesResponse = new CountriesResponse();

  @GetMapping
  CountriesResponse getCountries() throws InterruptedException {
    logger.info("GET /countries");
    return countriesResponse;
  }
}
