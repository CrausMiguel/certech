import { PropsWithChildren } from 'react'

export const FileDropZoneWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex items-center justify-center mt-4">
      <div className="w-2/3">{children}</div>
    </div>
  )
}
