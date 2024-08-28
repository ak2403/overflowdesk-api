import { Answer } from "../types/mappers/answer";
import { Mapper } from "../types/mappers/mapper";

export class AnswerMapper implements Mapper<Answer> {
  private _id!: number;
  private _body!: string;
  private _commentCount!: number;
  private _createdDate!: number;
  private _downVoteCount!: number;
  private _isAccepted!: boolean;
  private _lastActivityDate!: number;
  private _link!: string;
  private _ownerId!: number;
  private _questionId!: number;
  private _score!: number;
  private _upVoteCount!: number;

  set id(id: number) {
    this._id = id;
  }

  set body(body: string) {
    this._body = body;
  }

  set commentCount(count: number) {
    this._commentCount = count;
  }

  set createdDate(date: number) {
    this._createdDate = date;
  }

  set downVoteCount(count: number) {
    this._downVoteCount = count;
  }

  set isAccepted(accepted: boolean) {
    this._isAccepted = accepted;
  }

  set lastActivityDate(date: number) {
    this._lastActivityDate = date;
  }

  set link(link: string) {
    this._link = link;
  }

  set ownerId(id: number) {
    this._ownerId = id;
  }

  set questionId(id: number) {
    this._questionId = id;
  }

  set score(score: number) {
    this._score = score;
  }

  set upVoteCount(count: number) {
    this._upVoteCount = count;
  }

  build(): Answer {
    return {
      id: this._id,
      body: this._body,
      commentCount: this._commentCount,
      createdDate: this._createdDate,
      downVoteCount: this._downVoteCount,
      isAccepted: this._isAccepted,
      lastActivityDate: this._lastActivityDate,
      link: this._link,
      ownerId: this._ownerId,
      questionId: this._questionId,
      score: this._score,
      upVoteCount: this._upVoteCount,
    };
  }
}
