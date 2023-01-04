const cardObjectDefinitions = [
    { id: 1, imagePath: '/src/images/card-KingHearts.png' },
    { id: 1, imagePath: '/src/images/card-JackClubs.png' },
    { id: 1, imagePath: '/src/images/card-QueenDiamonds.png' },
    { id: 1, imagePath: '/src/images/card-AceSpades.png' }

]

const cardBackImgPath = '/src/images/card-black-blue.png'

const cardContainerElem = document.querySelector('.card-container')

function createCard(carditem) {

    // create div elements that make up a card
    const cardElem = document.createElement('div')
    const cardInnerElem = document.createElement('div')
    const cardFrontElem = document.createElement('div')
    const cardBackElem = document.createElement('div')

    // create front and back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    // class and id to card element

    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    // add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    //add class to front card element
    addClassToElement(cardFrontElem, "card-front")

    // add class to back card element
    addClassToElement(cardBackElem, "card-back")

    // add src attribute and appropriate value to img element back of card
    addSrcToImageElem(cardBackElem, cardBackImgPath)

    // add src attribute and appropriate value to img element front of card 
    addSrcToImageElem(cardFrontElem, cardItem.imagePath)

    // assign class to back image element of back of card
    addClassToElement(cardBackElem, 'card-img')

    // assign class to front image element of front of card
    addClassToElement(cardBackElem, 'card-img')

    //add front image element as child element to front card element 
    addChildElement(cardFrontElem, cardFrontImg)

    //add back image element as child element to back card element 
    addChildElement(cardBackElem, cardBackImg)

    // add front card element as child element to inner card element 
    addChildElement(cardInnerElem, cardFrontElem)

    // add back caard element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    // add inner card element as child element to card element 
    addChildElement(cardElem, cardInnerElem)


    // add card element as child element to appropriate grid  cell
    addCardToGridCell(cardElem)




}

function createElement(elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}

function addIntoElement(elem, id) {
    elem.id = id
}

function addSrcToImageElem(imgElem, src) {
    imgElem.src = src
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem)
}

function addCardToGridCell(card) {

    const cardPositionClassName = mapCardIdToGridCell(card)

    const cardPostElem = document.querySelector(cardPositionClassName)

    addChildElement(CardPosElem, card)

}

function mapCardIdToGridCell() {
    if (card.id == 1) {
        return '.card-pos-a'
    } else if (card.id == 2) {
        return '.card-pos-b'
    } else if (card.id == 3) {
        return '.card-pos-c'
    } else if (card.id == 4) {
        return '.card-pos-d'
    }
}