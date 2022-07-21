import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AskQuestionForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleFileUpload = () => {
    console.log('file uploaded');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="questionTitleInput">
        <Form.Label>শিরোনাম</Form.Label>
        <Form.Control
          type="text"
          placeholder="প্রশ্ন/সমস্যার শিরোনাম লিখুন..."
          {...register('title', { required: true })}
        />
        {errors.title && (
          <Form.Text className="text-danger">
            প্রশ্ন/সমস্যার শিরোনাম আবশ্যক
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="questionDescriptionInput">
        <Form.Label>বিস্তারিত</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="প্রশ্ন/সমস্যার বিস্তারিত লিখুন..."
          {...register('description', { required: true })}
        />
        {errors.description && (
          <Form.Text className="text-danger">
            প্রশ্ন/সমস্যার বিস্তারিত অংশ আবশ্যক
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="questionAttachments">
        <Form.Label>ছবি/স্ক্রিনশট যুক্ত করুন</Form.Label>
        <Form.Control
          type="file"
          multiple
          {...register('askQuestionImg')}
          onChange={handleFileUpload}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="questionTagInput">
        <Form.Label>ট্যাগ</Form.Label>
        <Form.Control
          type="text"
          placeholder="প্রশ্ন/সমস্যার ট্যাগ যুক্ত করুন..."
          {...register('tags', { required: true })}
        />
        {errors.tags && (
          <Form.Text className="text-danger">
            প্রশ্ন/সমস্যার ট্যাগ যুক্ত করা আবশ্যক
          </Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Post your Question
      </Button>
    </Form>
  );
};

export default AskQuestionForm;
