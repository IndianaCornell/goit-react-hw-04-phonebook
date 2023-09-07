import { ItemsList, StyledItem, DeleteButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ItemsList>
      {contacts.map(contact => (
        <StyledItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => onDelete(contact.id)}>
            Delete
          </DeleteButton>
        </StyledItem>
      ))}
    </ItemsList>
  );
};
