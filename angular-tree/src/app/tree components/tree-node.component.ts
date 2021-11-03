import {Component, Input} from '@angular/core';
import { Node } from './node'

@Component({
    selector: 'tree-node',
    templateUrl: './tree-node.template.html',
    styleUrls: ['./tree-node.styles.css']
})

export class TreeNode {
    @Input() tree: Array<Node>;
} 