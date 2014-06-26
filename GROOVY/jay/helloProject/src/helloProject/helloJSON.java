package helloProject;

import org.json.JSONException;
import org.json.JSONObject;

import redis.clients.jedis.Jedis;

public class helloJSON {
	
	public static void main(String args[]) throws JSONException {
		// TODO Auto-generated method stub
			JSONObject ob = new JSONObject();
			ob.put("Name", "Jay Dihenkar");
			ob.put("Position","Trainee");
			ob.put("Branch" ,"Computer Science");
			
			System.out.println(ob.toString());
			
			Jedis client = new Jedis("localhost",6379);
			client.set("data", ob.toString());
			client.close();
	}

}
