// example that how developer could costumize
const ex1 = document.querySelector('.example1')
const ex2 = document.querySelector('.example2')

function example1(){
	ex1.append(freeMap(true,0,0,90))

	const tg = new TreeGenerator()
	tg.makeTreeOne(6,20)
	tg.makeTreeTwo(3,30)

	const bg = new BuildingGenerator()
	bg.makeHouse(4,15)
	bg.makeCondo(3,20)

	const road = new RoadGenerator()
	road.makeHorizontal(4,90)
	road.makeVertical(3,45)
}

example1();

function example2() {
	ex2.append(freeMap(false,7,3,15))

	const tg1 = new TreeGenerator()
	tg1.makeTreeOne(6,20)
	tg1.makeTreeTwo(3,30)

	const bg1 = new BuildingGenerator()
	bg1.makeHouse(4,15)
	bg1.makeCondo(3,20)

	const road1 = new RoadGenerator()
	road1.makeHorizontal(4,90)
	road1.makeVertical(3,45)
}

example2();
