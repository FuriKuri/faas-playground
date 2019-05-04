package net.furikuri;

import java.util.HashMap;
import java.util.Map;

import com.amazonaws.services.lambda.runtime.Context; 
import com.amazonaws.services.lambda.runtime.RequestHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

public class Hello implements RequestHandler<Map<String, Object>, ApiGatewayResponse> {
    public ApiGatewayResponse handleRequest(Map<String, Object> input, Context context) {
        Object body = input.get("body");
        String name = "World";
        if (body != null) {
            try {
                Map<String, String> map = new ObjectMapper().readValue((String) body, new TypeReference<Map<String, String>>(){});
                name = map.get("name");
            } catch(Exception e) {
                name = "World";
            }

        }
        Map<String, String> headers = new HashMap<String, String>();
        headers.put("Content-Type", "text/plain");
        headers.put("Access-Control-Allow-Origin", "https://furikuri.net");
        headers.put("Access-Control-Allow-Options", "Content-Type");
        headers.put("Access-Control-Allow-Methods", "GET, POST");
        return new ApiGatewayResponse(200, "Hello " + name + "! From AWS + Java", headers, false);
    }
}