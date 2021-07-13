import React, { useState } from "react";

import {TabsBlock} from "./styles";

export default function Tabs({
    content
  }) {

  const [activeTab, setActiveTab] = useState(0)

  const Content = () => content[activeTab].content

  return (
    <>
      <TabsBlock>
        {content.map((item, key) => (
          <TabsBlock.Item
            key={key}
            _active={key === activeTab}
            onClick={() => setActiveTab(key)}
          >{item.title}</TabsBlock.Item>
        ))}
      </TabsBlock>
      <Content />
    </>
  )
}