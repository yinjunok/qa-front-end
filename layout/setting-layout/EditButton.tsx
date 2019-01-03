import * as React from 'react';
import * as css from './styles.less';

type EditButtonProp = React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>>;

const EditButton: EditButtonProp = () => <button className={css.editButton}>编辑</button>

export default EditButton;