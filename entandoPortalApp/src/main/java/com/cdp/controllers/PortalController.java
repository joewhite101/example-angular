package com.cdp.controllers;


import org.entando.entando.web.common.annotation.RestAccessControl;
import org.entando.entando.web.common.model.RestResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.util.ArrayList;
import java.util.List;

@RestController
@SessionAttributes("user")
public class PortalController {


    @RestAccessControl(permission = "")
    @RequestMapping(value = "/portals", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public RestResponse<KieProcessInstance> testInstanceValues() {

        return null;
    }


}
