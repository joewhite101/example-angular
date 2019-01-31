package com.cdp.services;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;

import com.cdp.model.Portal;

/**
 * Created by josephwhite on 1/31/19.
 */
public class MockJsonService {
	
	//private static final Logger log = LoggerFactory.getLogger(MockJsonService.class);

    public List<Portal> getPortals() {
        RestTemplate restTemplate = new RestTemplate();
        //List<Portal> = restTemplate.getForObject("http://gturnquist-quoters.cfapps.io/api/random", Portal.class);
        //log.info(quote.toString());
        
        Portal financialPortal = new Portal();
        financialPortal.setId("1");
        financialPortal.setName("Financial Portal");
        
        Portal mortgagePortal = new Portal();
        mortgagePortal.setId("2");
        mortgagePortal.setName("Mortgage Portal");
        
        List<Portal> portals = new ArrayList<Portal>();
        portals.add(financialPortal);
        portals.add(mortgagePortal);
        return portals;
        
    }
	
}
