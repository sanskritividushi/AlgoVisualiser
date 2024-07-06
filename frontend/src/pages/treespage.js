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
        <div classname="treecanvas">
          <canvas id="nodespace" ref={canvasRef}/>
        </div>
      );
}

  return (
    <div>
      <div className="navbar1">
        <Link to="/">Home</Link>
        <Link to="/arrays">Arrays</Link>
        <Link to="/trees">Trees</Link>
        <Link to="/graphs">Graphs</Link>
      </div>
      <div className="container">
        <div className="name">
          <h1>Tree Traversal Algorithms</h1>
        </div>
        <div className="choose">
          <h2>Insert nodes to create a tree</h2>
        </div>
        <div className="buttons_container">
          {/* Render your algorithm buttons or other content here */}
        </div>
        <div className="tree">
            <TextBox onInsert={handleInsert}/>
        </div>
            <BinaryTree nodes={treeNodes} />
        <div className="choose">
          <h2>Choose an algorithm to visualize</h2>
        </div>
      </div>
    </div>
  );
};

export default TreesPage;
