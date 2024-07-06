import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  drawBinaryTree,
  BinarySearchTreeNode,
  VisualizationType,
  setTheme,
} from "binary-tree-visualizer";

const TreesPage = () => {
  const [treeNodes, setTreeNodes] = useState([]);
  const [traversalResult, setTraversalResult] = useState([]);
  const [selectedTraversal, setSelectedTraversal] = useState("");

  const handleInsert = (value) => {
    setTreeNodes([...treeNodes, value]);
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const options = {
      radius: 26,
      growthAndShrinkTimes: 1.25,
      leafNodeSpace: 80,
      lineHeight: 90,
      fontSize: 16,
      textFont: 'Raleway',
      strokeColor: '#141444',
      colorArray: [{ borderColor: '#ffffff', bgColor: '#141444' }]
    };
    setTheme(options);
    if (canvasRef.current && treeNodes.length > 0) {
      const [firstEl] = treeNodes;
      const root = new BinarySearchTreeNode(firstEl);
      treeNodes.forEach((num) => root.insert(num));

      drawBinaryTree(root, canvasRef.current, {
        type: VisualizationType.HIGHLIGHT,
        maxWidth: window.innerWidth,
        maxHeight: 0,
      });
    }
  }, [canvasRef, treeNodes]);

  const handleTraversal = (type) => {
    if (treeNodes.length === 0) return;
    setSelectedTraversal(type);
    const [firstEl] = treeNodes;
    const root = new BinarySearchTreeNode(firstEl);
    treeNodes.forEach((num) => root.insert(num));
    let result = [];
    switch (type) {
      case "preorder":
        result = preorderTraversal(root);
        break;
      case "inorder":
        result = inorderTraversal(root);
        break;
      case "postorder":
        result = postorderTraversal(root);
        break;
      default:
        break;
    }
    setTraversalResult(result);
  };

  const gettraversal = (type) => {
    switch (type) {
      case "preorder":
        return `
        class node{
            public:
                int data;
                node* left;
                node* right;
            
                node(int d){
                    data=d;
                    left=NULL;
                    right=NULL;
                }
          }
        void Preorder(node*root){
              if(root==NULL){
                  return;
              }
              cout << root->data << " ";
              Preorder(root->left);
              Preorder(root->right);
        }
          `;

      case "inorder":
        return `
        class node{
          public:
              int data;
              node* left;
              node* right;
          
              node(int d){
                  data=d;
                  left=NULL;
                  right=NULL;
              }
        }
      void Inorder(node*root){
            if(root==NULL){
                return;
            }
            Inorder(root->left);
            cout << root->data << " ";
            Inorder(root->right);
      }
          `;
      case "postorder":
        return `
        class node{
          public:
              int data;
              node* left;
              node* right;
          
              node(int d){
                  data=d;
                  left=NULL;
                  right=NULL;
              }
        }
        void Postorder(node*root){
              if(root==NULL){
                  return;
              }
              Postorder(root->left);
              Postorder(root->right);
              cout << root->data << " ";
       }
          `;
      default:
        return '';
    }
  }

  const preorderTraversal = (node) => {
    if (!node) return [];
    return [node.value, ...preorderTraversal(node.left), ...preorderTraversal(node.right)];
  };

  const inorderTraversal = (node) => {
    if (!node) return [];
    return [...inorderTraversal(node.left), node.value, ...inorderTraversal(node.right)];
  };

  const postorderTraversal = (node) => {
    if (!node) return [];
    return [...postorderTraversal(node.left), ...postorderTraversal(node.right), node.value];
  };

  function TextBox({ onInsert }) {
    const [value, setValue] = useState(0);
    const handleChange = (e) => setValue(+e.target.value);
    const handleInsert = () => {
      setValue(0);
      onInsert(value);
      inputRef.current.focus();
    };
    const inputRef = useRef(null);
    return (
      <div className="treeinputs">
        <input id="enternode"
          ref={inputRef}
          onChange={handleChange}
          type="number"
          value={value}
        />
        <button id="insert" onClick={handleInsert}>Click To Insert</button>
      </div>
    );
  }

  function BinaryTree({ nodes }) {
    const canvasRef = useRef(null);

    useEffect(() => {
      if (canvasRef.current && nodes.length > 0) {
        const [firstEl] = nodes;
        const root = new BinarySearchTreeNode(firstEl);
        nodes.forEach((num) => root.insert(num));

        drawBinaryTree(root, canvasRef.current, {
          type: VisualizationType.HIGHLIGHT,
          maxWidth: window.innerWidth,
          maxHeight: 0,
        });
      }
    }, [canvasRef, nodes]);
    return (
      <div className="treecanvas">
        <canvas id="nodespace" ref={canvasRef} />
      </div>
    );
  }

  return (
    <div>
      <div className="navbar1">
        <Link to="/">HOME</Link>
        <Link to="/arrays">Arrays</Link>
        <Link to="./">Trees</Link>
        <Link to="/graphs">Graphs</Link>
        <Link to="/backtracking">Backtracking</Link>
      </div>
      <div className="container">
        <div className="name">
          <h1>Tree Traversal Algorithms</h1>
        </div>
        <div className="choose">
          <h2>Insert nodes to create a tree</h2>
        </div>
        <div className="tree">
          <TextBox onInsert={handleInsert} />
        </div>
        <BinaryTree nodes={treeNodes} />
        <div className="choose">
          <h2>Choose an algorithm to visualize</h2>
        </div>
        <div className="algo_buttons">
          <button id="bubble_button" onClick={() => handleTraversal("preorder")}>Preorder</button>
          <button id="bubble_button" onClick={() => handleTraversal("inorder")}>Inorder</button>
          <button id="bubble_button" onClick={() => handleTraversal("postorder")}>Postorder</button>
        </div>
        <div className="traversal-result">
          <h2>{selectedTraversal.charAt(0).toUpperCase() + selectedTraversal.slice(1)} Traversal Result: {traversalResult.join(", ")}</h2>
        </div>
        {selectedTraversal && (
          <div className="code_snippet">
            <h3>{selectedTraversal.charAt(0).toUpperCase() + selectedTraversal.slice(1)} Traversal:</h3>
            <pre className="code">{gettraversal(selectedTraversal)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};
export default TreesPage;
