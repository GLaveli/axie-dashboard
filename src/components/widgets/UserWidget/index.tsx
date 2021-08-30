import React from 'react'
import { WidgetLg } from '../WidgetLg'
import { WidgetSm } from '../WidgetSm'
import { TopUserWidgetContainer } from './styles'

export const UserWidget = () => {
 return (
  <TopUserWidgetContainer>
   <WidgetSm />
   <WidgetLg/>
  </TopUserWidgetContainer>
 )
}
