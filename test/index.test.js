import {create} from 'jss'
import aphroditeJss from '../src'

test('css generates class names', () => {
  let aphrodite = aphroditeJss(create())
  let sheet = aphrodite.StyleSheet.create({
    red: {
      color: 'red'
    },
    blue: {
      color: 'blue'
    }
  })
  
  expect(aphrodite.css(sheet.red, sheet.blue)).toMatchSnapshot()
})

test('css filters out falsy inputs', () => {
  let aphrodite = aphroditeJss(create())
  let sheet = aphrodite.StyleSheet.create({
    red: {
      color: 'red'
    }
  })

  expect(aphrodite.css(sheet.red)).toEqual(aphrodite.css(sheet.red, false))
  expect(aphrodite.css(sheet.red)).toEqual(aphrodite.css(false, sheet.red))
})

test('css succeeds for with empty args', () => {
  let aphrodite = aphroditeJss(create())

  expect(aphrodite.css()).toBeDefined()
  expect(aphrodite.css(false)).toBeDefined()
})

test('StyleSheet.create assigns a name to stylesheet properties', () => {
  let aphrodite = aphroditeJss(create())
  let sheet = aphrodite.StyleSheet.create({
    red: {
      color: 'red'
    },
    blue: {
      color: 'blue'
    }
  })
  
  expect(sheet.red.className).toBeDefined()
  expect(sheet.blue.className).toBeDefined()
  expect(sheet.red.className).not.toBe(sheet.blue.className)
})

test('StyleSheet.create assign different names to two different create calls', () => {
  let aphrodite = aphroditeJss(create())
  let sheet1 = aphrodite.StyleSheet.create({
    red: {
      color: 'red'
    }
  })
  let sheet2 = aphrodite.StyleSheet.create({
    red: {
      color: 'blue'
    }
  })
  
  expect(sheet1.red.className).not.toBe(sheet2.red.className)
})

test('StyleSheet.create works for empty stylesheets and styles', () => {
  let aphrodite = aphroditeJss(create())
  let emptySheet = aphrodite.StyleSheet.create({})
  
  expect(aphrodite.toString()).toHaveLength(0)
})
