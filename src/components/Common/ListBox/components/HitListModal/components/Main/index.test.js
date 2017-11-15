import React from 'react'
import {shallow} from 'enzyme'
import Main from './'

describe('HitListModal Main component', () => {
  describe('Render', () => {
    it ('renders passed in announcements', () => {
      const props = {
        announcements: [
          {
            year: 2017,
            text: 'Hello'
          }
        ],
        selectedYear: 2017
      }

      const wrapper = shallow(<Main {...props} />)
      expect(wrapper.html()).toContain('Hello')
    })

    it ('renders correctly if no announcement for current year', () => {
      const props = {
        announcements: [],
        selectedYear: 2016
      }
      const wrapper = shallow(<Main {...props} />)
      expect(wrapper.html()).not.toBe('')
    })

    it ('renders the selected year\'s announcement', () => {
      const props = {
        announcements: [
          {
            year: 2015,
            text: 'test'
          },
          {
            year: 2016,
            text: 'rendered'
          }
        ],
        selectedYear: 2016
      }

      const wrapper = shallow(<Main {...props} />)
      expect(wrapper.html()).toContain('rendered')
      wrapper.setProps({...props, selectedYear: 2015})
      expect(wrapper.html()).toContain('test')

    })
  })
})
