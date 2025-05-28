import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenAiService } from '../../services/open-ai-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ia-bot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './ia-bot.component.html',
  styleUrls: ['./ia-bot.component.css']
})
export class IaBotComponent {
  input = '';
  messages: { role: string; content: string }[] = [];

  constructor(private ai: OpenAiService) {}

  send() {
    if (!this.input.trim()) return;

    this.messages.push({ role: 'user', content: this.input });

    this.ai.sendMessage(this.input).subscribe({
      next: (res) => {
        const reply = res.choices?.[0]?.message?.content;
        if (reply) {
          this.messages.push({ role: 'assistant', content: reply });
        }
      },
      error: (err) => {
        this.messages.push({ role: 'assistant', content: 'Error al contactar con el servicio.' });
        console.error(err);
      }
    });

    this.input = '';
  }
}
