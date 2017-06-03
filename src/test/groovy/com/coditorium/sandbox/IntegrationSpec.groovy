package com.coditorium.sandbox

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.web.context.WebApplicationContext
import spock.lang.Specification

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup

@ContextConfiguration
@SpringBootTest(webEnvironment = RANDOM_PORT)
abstract class IntegrationSpec extends Specification {
  @Autowired
  WebApplicationContext webApplicationContext

  MockMvc mockMvc

  void setup() {
    mockMvc = webAppContextSetup(webApplicationContext)
        .build()
  }
}