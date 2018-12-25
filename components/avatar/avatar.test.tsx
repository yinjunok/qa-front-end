/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './Avatar';

describe('NiceCheckbox', () => {
    it('renders the checkbox with correct label', () => {
        const src = 'www.google.com';
        const cb = jest.fn();
        const wrapper = shallow(<Avatar onClick={cb} className="icon" src={src} />);
        wrapper.simulate('click', cb);
        expect(cb).toBeCalled();
        expect(wrapper.hasClass('icon')).toBe(true);
        expect(wrapper.prop('style')).toEqual({"background": "url(www.google.com) center / contain no-repeat", "borderRadius": "30px", "display": "inline-block", "height": 30, "width": 30});
    });
});
