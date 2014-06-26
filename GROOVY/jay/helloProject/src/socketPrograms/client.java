package socketPrograms;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class client {
	
	public static void main(String args[]) throws UnknownHostException, IOException { 
		Socket serv = new Socket("localhost",4003);
		Scanner scan = new Scanner(System.in);
		DataInputStream ip = new DataInputStream(serv.getInputStream());
		PrintStream send = new PrintStream(serv.getOutputStream(),true);
		
		while(scan.hasNext()) { 
			send.println(scan.next());
			System.out.println(ip.readLine());
		}
	}

}
