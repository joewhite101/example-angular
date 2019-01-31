package com.cdp.services;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.spi.LoggerFactory;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.cdp.model.Portal;
import com.cdp.model.Portaluser;

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
    
    public static Portaluser[] getPortalusers (){
    	
    	
    	/**
    	 * ResponseEntity<Object[]> responseEntity = restTemplate.getForEntity(urlGETList, Object[].class);
Object[] objects = responseEntity.getBody();
MediaType contentType = responseEntity.getHeaders().getContentType();
HttpStatus statusCode = responseEntity.getStatusCode();
    	 */
    	RestTemplate restTemplate = new RestTemplate();
    	ResponseEntity<Portaluser[]> responseEntityPortalusers=   restTemplate.getForEntity("https://jsonplaceholder.typicode.com/users", Portaluser[].class);
    	Portaluser[] portalusers = responseEntityPortalusers.getBody();
        return portalusers;
        //log.info(quote.toString());
    }
    
    public static void main( String[] args ){
        System.out.println( "Hello World!" );
        Portaluser[] portalusers =  getPortalusers ();
        System.out.println(portalusers[0].getName());
    }
	
}
