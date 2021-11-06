import { Component, OnInit } from '@angular/core';
import { Node } from './tree components/node'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tree: Array<Node> = [new Node('root', this.generateTree(8, 5))];

  generateTree (depth: number, maxWidth: number): Array<Node> {
    if (depth === 0 ) {
      return [];
    }

    let result: Array<Node> = [];

    for (let i = 0; i < Math.floor(Math.random() * maxWidth + 1); i++){
      let node = new Node ('Node ' + Math.floor(Math.random() * 999  + 1), this.generateTree(depth - 1 , maxWidth));
      result.push(node);
    }

    return result;
  }
}


