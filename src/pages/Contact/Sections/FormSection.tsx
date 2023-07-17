import styled from "styled-components";
import { Paragraph, Section } from "@/components";
import { ChangeEvent, FormEvent, useState } from "react";

type InputElements = HTMLInputElement | HTMLTextAreaElement;

const CustomSection = styled(Section)`
  border-radius: ${({ theme }) => theme.misc.section.borderRadius};
  margin-bottom: 300px;

  display: flex;
  flex-direction: row;
  gap: 1rem;

  h3 {
    margin-top: 0;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;

  background-color: ${({ theme }) => theme.colors.grey.light};
  color: ${({ theme }) => theme.colors.base.black};
  border-radius: 10px;
  padding: 0.5rem 1rem;

  transition: all 0.2s;
`;

const Submit = styled(Input)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.accent.yellow};

  @media (hover: hover) {
    :hover {
      background-color: ${({ theme }) => theme.colors.grey.light};
    }

    :active {
      background-color: grey;
    }
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey.medium};
`;

const TextArea = styled.textarea`
  border: none;

  background-color: ${({ theme }) => theme.colors.grey.light};
  border-radius: 10px;
  padding: 0.5rem 1rem;

  resize: vertical;
  min-height: 5rem;
`;

const TextContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const FormSection = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: ChangeEvent<InputElements>) => {
    const { target } = event;
    setValues({ ...values, [target.id]: target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(values);
  };

  return (
    <CustomSection>
      <TextContainer>
        <h3>Schicken sie uns eine Nachricht</h3>
        <Paragraph color="grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          corrupti error magnam. Labore natus magni minima sint iure, nostrum
          debitis deleniti ratione. Dolores laboriosam minima voluptatibus
          aperiam iusto. Itaque, repellat.
        </Paragraph>
      </TextContainer>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">E-mail Adresse</Label>
        <Input type="email" id="email" onChange={handleChange} required />
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" onChange={handleChange} required />
        <Label htmlFor="message">Nachricht</Label>
        <TextArea rows={3} id="message" onChange={handleChange} required />
        <Submit type="submit" value="Senden" />
      </Form>
    </CustomSection>
  );
};

export default FormSection;
