import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbackService } from '../service/feedback.service';
import { Feedback } from '../model/feedback.model';
import { Reply } from '../model/reply.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback;
  reply: Reply;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedback = new Feedback();
    this.reply  = new Reply();
  }

  sendFeedback() {
    this.feedbackService.addFeedback(this.feedback).subscribe(data => {
      this.reply = data as Reply;
      console.log(this.reply);
        alert(this.reply.message);
        this.feedback = new Feedback();
    }, error => {});
  }
}
