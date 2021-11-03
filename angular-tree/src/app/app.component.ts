import { Component, OnInit } from '@angular/core';
import { Node } from './tree components/node'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nodeC = new Node ('c',[]);
  nodeD = new Node ('d',[]);
  nodeF = new Node ('f',[]);
  nodeH = new Node ('h',[]);
  nodeG = new Node ('g',[this.nodeH]);

  nodeE = new Node ('e',[this.nodeF,this.nodeG]);
  nodeB = new Node ('b',[this.nodeE]);
  nodeA = new Node ('a',[this.nodeC,this.nodeD]);

  tree = [new Node('root', [this.nodeA,this.nodeB])];
}


