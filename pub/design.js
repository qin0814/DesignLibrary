/* JS Libraries */
"use strict";

(function(global, document, $) {
	var flag

	// Create container for the stickers
	function freeSticker(){
		const whole = document.createElement('div')
		const stickerContainer = document.createElement('div')
		stickerContainer.style = "float:left'postition:absolute"
		const name1 = document.createElement('div')
		name1.innerText = 'Stickers:'
		name1.style = "font-size:20px;float:left;"
		stickerContainer.appendChild(name1)

		const container = document.createElement('div')
		container.setAttribute('id', 'con')
		container.style = 'float:left; border-style: solid; width: 250px; height:750px;'

		const treeCon = document.createElement('div')
		treeCon.setAttribute('id', 'tree')
		treeCon.innerText = "Tree:"
		container.appendChild(treeCon)

		const buildingCon = document.createElement('div')
		buildingCon.setAttribute('id', 'building')
		buildingCon.innerText = "Building:"
		container.appendChild(buildingCon)

		const roadCon = document.createElement('div')
		roadCon.setAttribute('id', 'road')
		roadCon.innerText = "Road:"
		container.appendChild(roadCon)

		stickerContainer.appendChild(container)

		whole.appendChild(stickerContainer)
		return whole
	}

	function gridSticker(){
		const whole = document.createElement('div')
		const stickerContainer = document.createElement('div')
		stickerContainer.style = "float:left'postition:absolute"
		const name1 = document.createElement('div')
		name1.innerText = 'Stickers:'
		name1.style = "font-size:20px;float:left;"
		stickerContainer.appendChild(name1)

		const container = document.createElement('div')
		container.setAttribute('id', 'con')
		container.style = 'float:left; border-style: solid; width: 250px; height:750px;'

		const treeCon = document.createElement('div')
		treeCon.setAttribute('id', 'treeg')
		treeCon.innerText = "Tree:"
		container.appendChild(treeCon)

		const buildingCon = document.createElement('div')
		buildingCon.setAttribute('id', 'buildingg')
		buildingCon.innerText = "Building:"
		container.appendChild(buildingCon)

		const roadCon = document.createElement('div')
		roadCon.setAttribute('id', 'roadg')
		roadCon.innerText = "Road:"
		container.appendChild(roadCon)

		stickerContainer.appendChild(container)

		whole.appendChild(stickerContainer)
		return whole
	}


	// Create the container for 'map'
	function freeMap(free,rows,cols,d){
		flag = free
		let pre
		let num = d

		if (free === true){
			let mapContainer = document.createElement('div')
			mapContainer.style = "float:left;"
			const name = document.createElement('span')
			name.innerText = 'Map:'
			name.style = "font-size:20px;float:left;margin-left:40px"
			mapContainer.appendChild(name)

			let map = document.createElement('div')

			pre = freeSticker()
			map.className = 'freeMap'
			map.style = 'float:left; border-style: solid; width: 500px;' + 
			'height:600px;margin-left:10px;'

			const rbutton = document.createElement('button')
			rbutton.innerText = "Rotate"
			rbutton.style = "position:absolute"
			mapContainer.appendChild(rbutton)
			rbutton.addEventListener('click', rotateMap)

			var ro = 1

			function rotateMap(){
				let deg = ro * num
				console.log(deg)
				map.style.webkitTransform = 'rotate('+deg+'deg)'; 
				map.style.mozTransform    = 'rotate('+deg+'deg)'; 
				map.style.msTransform     = 'rotate('+deg+'deg)'; 
				map.style.oTransform      = 'rotate('+deg+'deg)'; 
				map.style.transfeorm       = 'rotate('+deg+'deg)'; 
				ro += 1
			}

			const screen = document.createElement('button')
			screen.innerText = 'ScreenShot'
			screen.style = 'position:absolute;margin-left:100px'
			const download = document.createElement('a')
			download.setAttribute('id', 'blank')
			mapContainer.appendChild(screen)
			mapContainer.appendChild(download)
			screen.addEventListener('click', getScreen)
			mapContainer.appendChild(map)
			pre.appendChild(mapContainer)
		} else{ // the grid map
			pre = gridSticker()
			let mapContainer = document.createElement('div')
			mapContainer.style = "float:left;"
			const name = document.createElement('span')
			name.innerText = 'Map:'
			name.style = "font-size:20px;float:left;margin-left:40px"
			mapContainer.appendChild(name)

			let map = document.createElement('div')
			map.className = 'gridMap'
			map.style = 'float:left; width:'+((cols + 1)*50)+'px; height:'+ ((rows+1)*50)+'px; margin-top: 40px;margin-left:10px'
			for (let c = 0; c < (rows * cols); c++) {
				let cell = document.createElement("div");
				cell.className = 'grid' + c
				cell.setAttribute('style', 'width:50px;height:50px;border: 1px solid;float:left')
				map.appendChild(cell)
	  	}
	  	const screen = document.createElement('button')
			screen.innerText = 'ScreenShot'
			screen.style = 'position:absolute;margin-left:100px'
			const download = document.createElement('a')
			download.setAttribute('id', 'blank')
			mapContainer.appendChild(screen)
			mapContainer.appendChild(download)
			screen.addEventListener('click', getScreen)
			mapContainer.appendChild(map)
	  	pre.appendChild(mapContainer)
		}
		return pre
	}

	// code learned from here
	// https://www.geeksforgeeks.org/how-to-take-screenshot-of-a-div-using-javascript/
	function getScreen(e){
		const which = e.target.nextSibling.nextSibling.className
		const output = document.querySelector('.'+which)

		const download = document.querySelector('#blank')
		html2canvas(output)
		.then(function (canvas) {
			download.setAttribute('href', canvas.toDataURL('image/png'))
			download.setAttribute('download', 'Design Work')
			download.click()
		})
	}

	// code learned from https://www.w3schools.com/howto/howto_js_draggable.asp
	// And youtube https://www.youtube.com/watch?v=NyZSIhzz5Do
	// functions to drag and drop a sticker
	function dragElement(elmnt) {
		var pos1, pos2,pos3,pos4
		elmnt.addEventListener('mousedown',dragMouseDown)

	  function dragMouseDown(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // get the mouse cursor position at startup:
	    pos3 = e.clientX;
	    pos4 = e.clientY;

	    window.addEventListener('mouseup', closeDragElement)
	    window.addEventListener('mousemove', elementDrag)
	  }

	  function elementDrag(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // calculate the new cursor position:
	    pos1 = pos3 - e.clientX;
	    pos2 = pos4 - e.clientY;
	    pos3 = e.clientX
	    pos4 = e.clientY

	    let react = elmnt.getBoundingClientRect()

	    // // set the element's new position:
	    elmnt.style.top = (react.top - pos2) + "px";
	    elmnt.style.left = (react.left - pos1) + "px"
	    elmnt.style.position = "fixed"
	  }

	  function closeDragElement() {
	  	window.removeEventListener('mousemove', elementDrag)
	  	window.removeEventListener('mouseup', closeDragElement)
	  }
	}

	function rotatable(elmnt){
		let times = 1
		elmnt.addEventListener('dblclick', rotation)

		function rotation() {
			let de = times * 30
			elmnt.style.webkitTransform = 'rotate('+de+'deg)'; 
			elmnt.style.mozTransform    = 'rotate('+de+'deg)'; 
			elmnt.style.msTransform     = 'rotate('+de+'deg)'; 
			elmnt.style.oTransform      = 'rotate('+de+'deg)'; 
			elmnt.style.transfeorm       = 'rotate('+de+'deg)'; 
			times += 1
		}
	}

	// Stickers
	function TreeGenerator() {
		this.treeOne = []
		this.treeTwo = []
	}

	TreeGenerator.prototype = {
		makeTreeOne: function(num,d) {
			for (let i=0;i<num;i++){
				const tree = document.createElement('span')
				const sticker = document.createElement('img')

				if (flag === false){
					tree.setAttribute('id', 'treeg1'+i)
					sticker.setAttribute('class', 'treeg1'+i)
					
					sticker.setAttribute('src', 't1.png')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#treeg')
					cont.appendChild(tree)

					dragElement(document.getElementById('treeg1'+i))
					rotatable(document.getElementById('treeg1'+i),d)
				} else{
					tree.setAttribute('id', 'tree1'+i)
					sticker.setAttribute('class', 'tree1'+i)
					sticker.setAttribute('src', 't1.png')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#tree')
					cont.appendChild(tree)
					dragElement(document.getElementById('tree1'+i))
					rotatable(document.getElementById('tree1'+i),d)
				}
				this.treeOne.push(sticker)
			}
		},
		makeTreeTwo: function(num,d) {
			for (let i=0;i<num;i++){
				const tree = document.createElement('span')
				const sticker = document.createElement('img')

				if (flag === false){
					tree.setAttribute('id', 'treeg2'+i)
					sticker.setAttribute('class', 'treeg2'+i)
					const cont = document.querySelector('#treeg')
					sticker.setAttribute('src', 't2.png')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					cont.appendChild(tree)

					dragElement(document.getElementById('treeg2'+i))
					rotatable(document.getElementById('treeg2'+i),d)
				} else{
					tree.setAttribute('id', 'tree2'+i)
					sticker.setAttribute('class', 'tree2'+i)
					sticker.setAttribute('src', 't2.png')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#tree')
					cont.appendChild(tree)
					dragElement(document.getElementById('tree2'+i))
					rotatable(document.getElementById('tree2'+i),d)
				}
			}
		}
	}

	// Building stickers
	function BuildingGenerator() {
		this.house = []
		this.condo = []
	}

	BuildingGenerator.prototype = {
		makeHouse: function(num,d) {
			for (let i=0;i<num;i++){
				const tree = document.createElement('span')
				const sticker = document.createElement('img')

				if (flag === false){
					tree.setAttribute('id', 'houseg'+i)
					sticker.setAttribute('class', 'houseg'+i)
					sticker.setAttribute('src', 'house.png')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#buildingg')
					cont.appendChild(tree)
					dragElement(document.getElementById('houseg'+i))
					rotatable(document.getElementById('houseg'+i),d)
				} else{
					tree.setAttribute('id', 'house'+i)
					sticker.setAttribute('class', 'house'+i)
					sticker.setAttribute('src', 'house.png')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#building')
					cont.appendChild(tree)
					dragElement(document.getElementById('house'+i))
					rotatable(document.getElementById('house'+i),d)
				}
				this.house.push(sticker)
			}
		},
		makeCondo: function(num,d) {
			for (let i=0;i<num;i++){
				const tree = document.createElement('span')
				const sticker = document.createElement('img')

				if (flag === false){
					tree.setAttribute('id', 'condog'+i)
					sticker.setAttribute('class', 'condog'+i)
					sticker.setAttribute('src', 'condo.png')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#buildingg')
					cont.appendChild(tree)
					dragElement(document.getElementById('condog'+i))
					rotatable(document.getElementById('condog'+i),d)
				} else{
					tree.setAttribute('id', 'condo'+i)
					sticker.setAttribute('class', 'condo'+i)
					sticker.setAttribute('src', 'condo.png')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#building')
					cont.appendChild(tree)
					dragElement(document.getElementById('condo'+i))
					rotatable(document.getElementById('condo'+i),d)
				}
			}
		}
	}

	// Road
	function RoadGenerator() {
		this.roadOne = []
		this.roadTwo = []
	}

	RoadGenerator.prototype = {
		makeHorizontal: function(num,d) {
			for (let i=0;i<num;i++){
				const tree = document.createElement('span')
				const sticker = document.createElement('img')

				if (flag === false){
					tree.setAttribute('id', 'horizontalg'+i)
					sticker.setAttribute('class', 'horizontalg'+i)
					sticker.setAttribute('src', 'road.jpg')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#roadg')
					cont.appendChild(tree)
					dragElement(document.getElementById('horizontalg'+i))
					rotatable(document.getElementById('horizontalg'+i),d)
				} else{
					tree.setAttribute('id', 'horizontal'+i)
					sticker.setAttribute('class', 'horizontal'+i)
					sticker.setAttribute('src', 'road.jpg')
					sticker.style = "width:50px;height:50px;"
					tree.appendChild(sticker)
					const cont = document.querySelector('#road')
					cont.appendChild(tree)
					dragElement(document.getElementById('horizontal'+i))
					rotatable(document.getElementById('horizontal'+i),d)
				}
				this.roadOne.push(sticker)
			}
		},
		makeVertical: function(num,d) {
			for (let i=0;i<num;i++){
				const tree = document.createElement('span')
				const sticker = document.createElement('img')

				if (flag === false){
					tree.setAttribute('id', 'verticalg'+i)
					sticker.setAttribute('class', 'verticalg'+i)
					sticker.setAttribute('src', 'road.jpg')
					sticker.style = "width:50px;height:50px;transform: rotate(90deg)"
					tree.appendChild(sticker)
					const cont = document.querySelector('#roadg')
					cont.appendChild(tree)
					dragElement(document.getElementById('verticalg'+i))
					rotatable(document.getElementById('verticalg'+i),d)
				} else{
					tree.setAttribute('id', 'vertical'+i)
					sticker.setAttribute('class', 'vertical'+i)
					sticker.setAttribute('src', 'road.jpg')
					sticker.style = "width:50px;height:50px;transform: rotate(90deg)"
					tree.appendChild(sticker)
					const cont = document.querySelector('#road')
					cont.appendChild(tree)
					dragElement(document.getElementById('vertical'+i))
					rotatable(document.getElementById('vertical'+i),d)
				}
				this.roadTwo.push(sticker)
			}
		}
	}
	global.RoadGenerator = global.RoadGenerator || RoadGenerator
	global.TreeGenerator = global.TreeGenerator || TreeGenerator
	global.BuildingGenerator = global.BuildingGenerator || BuildingGenerator
	global.freeMap = global.freeMap || freeMap
})(window, window.document, $);