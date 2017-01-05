package com.coditorium.sandbox.country;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/countries")
class CountriesEndpoint {
    private final CountriesResponse countriesResponse = new CountriesResponse();

    @GetMapping
    CountriesResponse getCountries() throws InterruptedException {
        return countriesResponse;
    }
}
