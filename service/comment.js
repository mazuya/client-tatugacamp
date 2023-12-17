import axios from 'axios';
import Error from 'next/error';
import { parseCookies } from 'nookies';

export async function GetComments({ assignmentId, studentId }) {
  try {
    if (!assignmentId || !studentId) {
      return null;
    }
    const cookies = parseCookies();
    const access_token = cookies.access_token;
    const comments = await axios.get(
      `${process.env.MAIN_SERVER_URL}/user/comment/get-comment`,
      {
        params: {
          assignmentId: assignmentId,
          studentId: studentId,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return comments;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function PostComment({ assignmentId, studentId, body }) {
  try {
    if (!assignmentId || !studentId) {
      return null;
    }
    const cookies = parseCookies();
    const access_token = cookies.access_token;
    const comments = await axios.post(
      `${process.env.MAIN_SERVER_URL}/user/comment/post-comment`,
      {
        body: body,
        assignmentId: assignmentId,
        studentId: studentId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return comments;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function DeleteStudentComment({ studentCommentId }) {
  try {
    if (!studentCommentId) {
      return null;
    }
    const cookies = parseCookies();
    const access_token = cookies.access_token;
    const deleteComment = await axios.delete(
      `${process.env.MAIN_SERVER_URL}/user/comment/delete-comment-student`,
      {
        params: {
          studentCommentId: studentCommentId,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return deleteComment;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function DeleteTeachertComment({ teacherCommentId }) {
  try {
    if (!teacherCommentId) {
      return null;
    }
    const cookies = parseCookies();
    const access_token = cookies.access_token;
    const deleteComment = await axios.delete(
      `${process.env.MAIN_SERVER_URL}/user/comment/delete-comment-teacher`,
      {
        params: {
          teacherCommentId: teacherCommentId,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return deleteComment;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
