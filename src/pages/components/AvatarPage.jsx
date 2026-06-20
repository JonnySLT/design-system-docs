import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
import Avatar from '../../components/ui/Avatar.jsx'

const sizesCode = `<Avatar size="sm" name="Alice Baker" />
<Avatar size="md" name="Alice Baker" />
<Avatar size="lg" name="Alice Baker" />`

const initialsCode = `<Avatar name="Alice Baker" />
<Avatar name="Carlos Diaz" />
<Avatar name="Priya Mehta" />`

const imageCode = `<Avatar name="Alice Baker" src="https://i.pravatar.cc/80?img=1" />`

const props = [
  { prop: 'name',  type: 'string',              default: '—',    description: 'Full name — generates initials and accessible label' },
  { prop: 'src',   type: 'string',              default: '—',    description: 'Image URL; falls back to initials on error' },
  { prop: 'size',  type: '"sm" | "md" | "lg"', default: '"md"', description: '24px / 32px / 40px' },
]

export default function AvatarPage() {
  return (
    <>
      <h1 className="page-title">Avatar</h1>
      <p className="page-description">
        Represents a user or entity. Falls back to initials when no image is provided
        or the image fails to load.
      </p>

      <h2 className="section-title">Sizes</h2>
      <ComponentDemo
        code={sizesCode}
        preview={<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Avatar size="sm" name="Alice Baker" />
          <Avatar size="md" name="Alice Baker" />
          <Avatar size="lg" name="Alice Baker" />
        </div>}
      />

      <h2 className="section-title">Initials</h2>
      <ComponentDemo
        code={initialsCode}
        preview={<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Avatar name="Alice Baker" />
          <Avatar name="Carlos Diaz" />
          <Avatar name="Priya Mehta" />
        </div>}
      />

      <Guidelines
        accessibility={[
          'Pass the name prop so the avatar gets initials and an accessible label when the image is missing or fails.',
          'If the avatar sits beside a visible name, mark the image decorative (aria-hidden) to avoid a duplicate announcement.',
        ]}
        dos={[
          'Always pass name so initials and the label work as a fallback.',
          'Stick to the defined sizes for consistent rhythm.',
        ]}
        donts={[
          'Don’t rely on color alone to distinguish users.',
          'Don’t make an avatar the only target for an important action — pair it with a label.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
