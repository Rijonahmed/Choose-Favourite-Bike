import React from 'react';
import './Question.css'

const Question = () => {
  return (
    <div className='question'>
      <h2>1 Question : How React Work?</h2>
      <h4>Ans:</h4><p>ReactJS হল মোবাইল এবং ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টের জন্য সবচেয়ে জনপ্রিয় জাভাস্ক্রিপ্ট লাইব্রেরিগুলির মধ্যে একটি। React js এর মধ্যে একাধিক component তৈরি করা যায়। অনেক গুলো component ব্যবহার করে একটা ওয়েব পেইজ তৈরি করা হয়। অর্থাৎ  component এর মধ্যেমে ওয়েব পেইজকে ছোট ছোট আকারে ভাগ করা হয় এবং সব গুলোকে আবার import এবং  expert এর মাধ্যমে একসাথে করতে হয়। মূূূল কথা হচ্ছে আমরা এই লাইব্রেরি এর মধ্যেমে নিজের মত করে component তৈরি করে তা UI তে দেখতে পারি।</p>

      <h2>2 Question : Difference between props and state in react js</h2>
      <h4>Ans:</h4>

      <table className='table'>
        <thead>
          <tr>
            <th >Props</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>
              <p>&bull; Props are immutable.</p>
              <p>&bull; props can not be modified</p>
              <p>&bull; You can pass properties  form parent components.</p>
              <p>&bull; Determine the view upon creation, and then they remain static.</p>
            </td>
            <td>
              <p>&bull; State are mutable. </p>
              <p>&bull; State can be modified using this.setState</p>
              <p>&bull; You can define states in the component itself.</p>
              <p>&bull; The state is set and updated by the object.</p>
              <p>&bull; Both are accessible  as attributes of the component class  and compose components with a different representation view</p>

            </td>
          </tr>
        </tbody>


      </table>

    </div>
  );
};

export default Question;