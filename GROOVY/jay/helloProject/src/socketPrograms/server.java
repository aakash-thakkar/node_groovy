package socketPrograms;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;

public class server {
	
	public static void main(String args[]) throws IOException { 
		

	ServerSocket server = new ServerSocket(4003);
	Socket clientSoc = server.accept();
	
	PrintStream out = new PrintStream(clientSoc.getOutputStream(),true);
	DataInputStream in = new DataInputStream(clientSoc.getInputStream());
	String str;
	while(true) {
		try {
		str = in.readLine();
		out.println(str);
		}catch(Exception e) {}
	}
	
	}

}
