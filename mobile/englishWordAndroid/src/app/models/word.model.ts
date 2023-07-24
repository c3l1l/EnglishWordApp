import { ExampleModel } from "./example.model";

export class WordModel{
    id:number;
    expression:string;
    definition:string;
    examples:ExampleModel[];
}