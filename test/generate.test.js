import {create} from 'jss'
import aphroditeJss from '../src'

test('css returns a CSS string for a single property', () => {
  let aphrodite = aphroditeJss(create())
  let sheet = aphrodite.StyleSheet.create({
    red: {
      color: 'red'
    }
  })
  aphrodite.css(sheet.red)
  
  expect(aphrodite.toString()).toMatchSnapshot()
})

test('css implements override logic', () => {
  let aphrodite = aphroditeJss(create())
  let sheet = aphrodite.StyleSheet.create({
    red: {
      color: 'red'
    },
    blue: {
      color: 'blue'
    }
  })
  aphrodite.css(sheet.red, sheet.blue)
  
  expect(aphrodite.toString()).toMatchSnapshot()
})

test('css supports media queries', () => {
  let aphrodite = aphroditeJss(create())
  let sheet = aphrodite.StyleSheet.create({
    '@media (max-width: 400px)': {
      red: {
        color: 'red'
      }
    }
  })
  
  expect(aphrodite.toString()).toMatchSnapshot()
})

test('css supports keyframe', () => {
  let aphrodite = aphroditeJss(create())
  let styles = aphrodite.StyleSheet.create({
    '@keyframes anim1': {
      '0%': {
        transform: 'scale(0)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  })

  expect(aphrodite.toString()).toMatchSnapshot()
})

test('css supports font faces', () => {
  let aphrodite = aphroditeJss(create())
  let sheet = aphrodite.StyleSheet.create({
    '@font-face': {
      'font-family': 'Roboto',
      'src': "local('Roboto'), local('Roboto-Regular'), url('https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2') format('woff2')"
    }
  })
  
  expect(aphrodite.toString()).toMatchSnapshot()
})
