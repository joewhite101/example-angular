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
/**
 * 
/posts	100 posts
/comments	500 comments
/albums	100 albums
/photos	5000 photos
/todos	200 todos
/users
 * @return
 */
	
	
    public List<Portal> getPortals() {
        RestTemplate restTemplate = new RestTemplate();
        //List<Portal> = restTemplate.getForObject("http://gturnquist-quoters.cfapps.io/api/random", Portal.class);
        //log.info(quote.toString());
        
        Portal posts = new Portal();
        posts.setId("1");
        posts.setName("Posts");
        
        Portal comments = new Portal();
        comments.setId("2");
        comments.setName("Comments");
        
        Portal albums = new Portal();
        albums.setId("3");
        albums.setName("Albums");
        
        Portal photos = new Portal();
        photos.setId("4");
        photos.setName("Photos");
        
        Portal todos = new Portal();
        todos.setId("5");
        todos.setName("Todos");
        
        Portal users = new Portal();
        users.setId("6");
        users.setName("Users");
        
        List<Portal> portals = new ArrayList<Portal>();
        portals.add(posts);
        portals.add(comments);
        portals.add(albums);
        portals.add(photos);
        portals.add(todos);
        portals.add(users);
        
        return portals;
        
    }
	
}
