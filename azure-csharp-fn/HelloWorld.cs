using System;
using System.Net;
using System.Net.Http.Headers;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Example.Function
{
    public static class HelloWorld
    {
        [FunctionName("HelloWorld")]
        public static async Task<System.Net.Http.HttpResponseMessage> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", "options", Route = null)] HttpRequest req,
            ILogger log)
        {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            string name = data?.name;

            if (name == null) {
                name = "World";
            }

            var response = new System.Net.Http.HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new System.Net.Http.StringContent($"Hello {name}! From Azure + C#")
                };

            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Headers.Add("Access-Control-Allow-Methods", "GET, POST");
            response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");

            return response;
        }
    }
}