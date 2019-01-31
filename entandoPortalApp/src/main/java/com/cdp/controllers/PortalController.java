package com.cdp.controllers;


import com.cdp.model.Portal;
import com.cdp.services.MockJsonService;
import org.entando.entando.web.common.annotation.RestAccessControl;
import org.entando.entando.web.common.model.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

@RestController
@SessionAttributes("user")
public class PortalController {


    @Autowired
    private MockJsonService service;

    @RestAccessControl(permission = "")
    @RequestMapping(value = "/portals", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public RestResponse<Portal> testInstanceValues() {

        return new RestResponse<>(service.getPortals());
    }


    @RestAccessControl(permission = "")
    @RequestMapping(value = "/portalDemo/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public RestResponse<Portal> testInstanceValues() {

        return new RestResponse<>(service.getPortals());
    }

}
