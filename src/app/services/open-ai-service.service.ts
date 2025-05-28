import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class OpenAiService {
  private apiUrl = 'https://botigalucamarc.openai.azure.com/openai/deployments/BotigaPesca/chat/completions?api-version=2024-02-15-preview';
  private apiKey = 'GBI3lXvpAMIEAxvOJl26KL8dHCoaLLZVk8zyyzPtCUjw62xHRZDJJQQJ99BEACYeBjFXJ3w3AAABACOGQRrD';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const systemMessage = 'Eres un asistente útil que responde dudas sobre la tienda Básica.' +
      'Las respuestas deben ser cortas y concisas.' +'En nuestra tienda vendemos productos de pesca'+
    'de momento solo tenemos carretes y cañas de pescar'+'mas a delante venderemos otros productos'+
      'nuestra pagina web no tolera gestos ofensivos';

    const body = {
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 400
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
