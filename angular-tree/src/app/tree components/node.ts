export class Node {
    data: string;
    children: Array<Node>;
    expanded: boolean;

    constructor (data: string, children: Array<Node>){
        this.data = data;
        this.children = children;
        this.expanded = false;
    }

    expand () {
        this.expanded = !this.expanded;
    }
}