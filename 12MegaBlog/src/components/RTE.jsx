import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name = "content", control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            value={value}
            onEditorChange={onChange}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'advlist autolink link image lists charmap preview anchor',
                'searchreplace visualblocks code fullscreen insertdatetime media',
                'table emoticons template paste help wordcount',
                'autosave a11ychecker advtable checklist codesample colorpicker',
                'export formatpainter imagetools mentions nonbreaking pageembed',
                'casechange linkchecker powerpaste quickbars textpattern toc',
              ],
              toolbar: `
                undo redo | bold italic underline strikethrough | 
                fontselect fontsizeselect formatselect | alignleft aligncenter 
                alignright alignjustify | outdent indent | numlist bullist 
                checklist | forecolor backcolor casechange permanentpen 
                formatpainter removeformat | pageembed template link anchor 
                codesample | a11ycheck ltr rtl | showcomments addcomment
              `,
              toolbar_mode: 'floating', // Keeps the toolbar visible on focus
            }}
          />
        )}
      />
    </div>
  );
}

RTE.propTypes = {
  name: PropTypes.string,
  control: PropTypes.shape({
    register: PropTypes.func,
    getValues: PropTypes.func,
    setValue: PropTypes.func,
    watch: PropTypes.func,
  }).isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};
