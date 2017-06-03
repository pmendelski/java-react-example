package com.coditorium.sandbox

import org.springframework.test.web.servlet.ResultActions

import static org.hamcrest.Matchers.hasItem
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class CountriesEndpointSpec extends IntegrationSpec {
  def "should list countries"() {
    when:
      ResultActions getResponse = mockMvc.perform(get('/api/countries'))
    then:
      getResponse
          .andExpect(status().isOk())
          .andExpect(jsonPath('$.countries').isArray())
          .andExpect(jsonPath('$.countries').isNotEmpty())
          .andExpect(jsonPath('$.countries', hasItem("Poland")))
          .andDo(print())
  }
}
