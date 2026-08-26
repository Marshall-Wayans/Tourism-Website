import React from 'react'
import { Drawer } from '../ui/Drawer'
import { EnquiryForm } from './EnquiryForm'
import { useEnquiry } from '../../contexts/EnquiryContext'

export function EnquiryDrawer() {
  const { open, subject, closeEnquiry } = useEnquiry()

  return (
    <Drawer
      open={open}
      onClose={closeEnquiry}
      title="Plan your Tanzania trip"
      description={subject}
      labelledBy="enquiry-drawer-title"
    >
      <EnquiryForm subject={subject} compact onSubmitted={() => undefined} />
    </Drawer>
  )
}
