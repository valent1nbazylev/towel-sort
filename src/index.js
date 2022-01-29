
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let elementReverse, element
	res = []
	if (arguments.length == 0) { //если параметр не был передан
		return res//вернуть пустую
	} else {

		for (let index = 0; index < matrix.length; index++) { 
			element = matrix[index];

			if (index % 2 == 0) { //если четный индекс
				res.push(...element) //пушим в масив (...объединяет матрицу в массив)
				// console.log('+итерация',res)
			} else {

				elementReverse = element.reverse() //иначе переворачиваем и пушим

				res.push(...elementReverse) 
				//  console.log('+итерация',res)
			}
		}
		console.log('итог', res)
		return res
	}
}




















//========================================================================================
/*towelSort = (matrix) => {
	 let elementReverse, element
	res = []
	if (arguments.length == 0) { //если параметр не был передан
		return res//вернуть пустую
	} else {

		for (let index = 0; index < matrix.length; index++) { 
			element = matrix[index];

			if (index % 2 == 0) { //если четный индекс
				res.push(...element) //пушим в масив (...объединяет матрицу в массив)
				// console.log('+итерация',res)
			} else {

				elementReverse = element.reverse() //иначе переворачиваем и пушим

				res.push(...elementReverse) 
				//  console.log('+итерация',res)
			}
		}
		console.log('итог', res)
		return res
	}
}

towelSort(
	[
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
 */