package p

import (
	"encoding/json"
	"fmt"
	"html"
	"net/http"
)

func enableCors(w *http.ResponseWriter) {
    (*w).Header().Set("Access-Control-Allow-Origin", "https://furikuri.net")
    (*w).Header().Set("Access-Control-Allow-Methods", "GET, POST")
    (*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func HelloWorld(w http.ResponseWriter, r *http.Request) {
	var d struct {
		Name string `json:"name"`
	}
    var name = "World";
	json.NewDecoder(r.Body).Decode(&d);
    
	if d.Name != "" {
		name = d.Name
	}
    enableCors(&w)
	fmt.Fprint(w, html.EscapeString("Hello " + name + "! From GCP + Go"))
}
