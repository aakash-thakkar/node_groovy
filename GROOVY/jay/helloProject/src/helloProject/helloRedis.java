package helloProject;

import org.apache.commons.pool2.impl.GenericObjectPoolConfig;

import redis.clients.jedis.*;
 

public class helloRedis 
{ 
   public static void main(String args[]) { 
//	   JedisPool pool = new JedisPool(new JedisPoolConfig(),"localhost");
//	   Jedis client = pool.getResource();
	   int m = 0;
	   Jedis client = new Jedis("localhost", 6379);
	   while (true) {
		   m++;
	   client.set("key"+m, "Value"+m);
	   System.out.println("Get for key is : " + client.get("key"+m));
   }
   }  
}