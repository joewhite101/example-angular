package com.cdp.controllers;


import com.agiletec.aps.system.services.role.Permission;
import com.cdp.model.Portal;
import com.cdp.model.Portaluser;
import com.cdp.services.MockJsonService;
import org.entando.entando.web.common.annotation.RestAccessControl;
import org.entando.entando.web.common.model.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@SessionAttributes("user")
public class PortalController {


    @Autowired
    private MockJsonService service;

    @RestAccessControl(permission = "")
    @RequestMapping(value = "/portalDemo/portals", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public RestResponse<List<Portal>> getPortals() {
        return new RestResponse<>(service.getPortals());
    }


    @RestAccessControl(permission = "")
    @RequestMapping(value = "/portalDemo/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public RestResponse<List<Portaluser>> getUsers() {
        return new RestResponse<>(service.getPortalusers());
    }

    @RestAccessControl(permission = Permission.SUPERUSER)
    @RequestMapping(value = "/portalDemo/users/{userId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public RestResponse<Portaluser> getByUserId(@PathVariable String userId) {
        return new RestResponse<>(service.getPortalUserById(userId));
    }
}
