package helloProject;

import org.json.JSONException;
import org.json.JSONObject;



import redis.clients.jedis.Jedis;

public class getJSON {

	public static void main(String[] args) throws JSONException {
		
		Jedis client = new Jedis("localhost",6379);
		String jsondata = client.get("data");
		JSONObject ob = new JSONObject(jsondata);
		System.out.println("The data recieved is " + ob.toString());
		client.close();

	}

}
