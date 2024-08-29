import { Mapper } from "../types/mappers/mapper";
import { Question } from "../types/mappers/question";

export class QuestionMapper implements Mapper<Question> {
  private _id!: number;
  private _body!: string;
  private _createdDate!: number;
  private _downVoteCount!: number;
  private _isAnswered: boolean = false;
  private _lastActivityDate!: number;
  private _link!: string;
  private _ownerId!: number;
  private _score!: number;
  private _title!: string;
  private _upVoteCount!: number;
  private _viewCount!: number;

  set id(id: number) {
    this._id = id;
  }

  set body(body: string) {
    this._body = body;
  }

  set createdDate(date: number) {
    this._createdDate = date;
  }

  set downVoteCount(count: number) {
    this._downVoteCount = count;
  }

  set isAnswered(answered: boolean) {
    this._isAnswered = answered;
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

  set score(score: number) {
    this._score = score;
  }

  set title(title: string) {
    this._title = title;
  }

  set upVoteCount(count: number) {
    this._upVoteCount = count;
  }

  set viewCount(count: number) {
    this._viewCount = count;
  }

  //TODO: throw error if necessary props are missing
  build(): Question {
    return {
      id: this._id,
      body: this._body,
      createdDate: this._createdDate,
      downVoteCount: this._downVoteCount,
      isAnswered: this._isAnswered,
      lastActivityDate: this._lastActivityDate,
      link: this._link,
      ownerId: this._ownerId,
      score: this._score,
      title: this._title,
      upVoteCount: this._upVoteCount,
      viewCount: this._viewCount,
    };
  }
}
